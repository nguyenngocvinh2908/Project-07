import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box'
import { useColorScheme } from '@mui/material/styles'
import ListColumns from './ListColumns/ListColumns'
import * as sort from '~/utils/sort'
import { DndContext, useSensor, useSensors, MouseSensor, TouchSensor, DragOverlay, defaultDropAnimationSideEffects } from '@dnd-kit/core'
import { arrayMove } from '@dnd-kit/sortable'

import Column from './ListColumns/Column/Column'
import Card from './ListColumns/Column/ListCards/Card/Card'

const ACTIVE_DRAG_ITEM_TYPE = {
  COLUMN: 'ACTIVE_DRAG_ITEM_TYPE_COLUMN',
  CARD: 'ACTIVE_DRAG_ITEM_TYPE_CARD'
}

function BoardContent({ board }) {
  const { mode } = useColorScheme()
  // https://docs.dndkit.com/api-documentation/sensors
  // Nếu dùng pointerSensor mặc định thì phải kết hợp thuộc tính css touch-action: none ở những phần tử kéo thả - nhưng vẫn còn pug
  // const pointerSensor = useSensor(PointerSensor, { activationConstraint: { distance: 10 } })

  // Yều cầu chuột phải di chuyển 10px thì mới kích hoạt event
  const mouseSensor = useSensor(MouseSensor, { activationConstraint: { distance: 10 } })

  // Nhấn giữ 250ms và dung sai của cảm ứng(dễ hiểu là di chuyển/chênh lệch 5px) thì mới kích hoạt event
  const touchSensor = useSensor(TouchSensor, { activationConstraint: { delay: 250, tolerance: 5 } })

  // Ưu tiên nên kết hợp sử dụng 2 cảm biến mouseSensor và touchSensor để có trải nghiệm tốt trên mobile
  // const sensor = useSensors(pointerSensor)
  const sensor = useSensors(mouseSensor, touchSensor)

  const [orderedColumns, setOrderedColumns] = useState([])

  // Cùng 1 thời điểm chỉ có 1 phần tử card hoặc column được kéo
  const [activeDragItemId, setActiveDragItemId] = useState(null)
  const [activeDragItemType, setActiveDragItemType] = useState(null)
  const [activeDragItemData, setActiveDragItemData] = useState(null)

  useEffect(() => {
    const orderedColumns = sort.mapOrder(board?.columns, board?.columnOrderIds, '_id')
    // eslint-disable-next-line
    setOrderedColumns(orderedColumns)
  }, [board])

  const handleOnDragStart = (e) => {
    // console.log(e)
    setActiveDragItemId(e?.active?.id)
    setActiveDragItemType(e?.active?.data?.current?.columnId ? ACTIVE_DRAG_ITEM_TYPE.CARD : ACTIVE_DRAG_ITEM_TYPE.COLUMN)
    setActiveDragItemData(e?.active?.data?.current)
  }


  const handleOnDragEnd = (e) => {
    const { active, over } = e

    // Kiểm tra nếu không tồn tại over(kéo thả linh tinh ra ngoài thì return tránh lỗi)
    if (!over) return

    // Nếu vị trí kéo thả mới khác với vị trí ban đầu
    if (active.id !== over.id) {
      // Tìm vị trí cũ của column thông qua active
      const oldIndex = orderedColumns.findIndex(column => column._id === active.id)
      const newIndex = orderedColumns.findIndex(column => column._id === over.id)
      const dndOrderedColumns = arrayMove(orderedColumns, oldIndex, newIndex)
      // Xử Lý Gọi Api Để Update Dữ Liệu
      // -------------------------------
      setOrderedColumns(dndOrderedColumns)
    }

    // Set lại giá trị khi kéo thả xong
    setActiveDragItemId(null)
    setActiveDragItemType(null)
    setActiveDragItemData(null)
  }

  // Animation khi thả (drop) 1 phần tử  - Mặc định nếu style lại thi sau khi thả nó mất luôn cái dragOverlaty
  const CustomDropAnimation = {
    sideEffects: defaultDropAnimationSideEffects({ styles: { active: { opacity: 0.5 } } })
  }

  return (
    <DndContext onDragStart={handleOnDragStart} onDragEnd={handleOnDragEnd} sensors={sensor}>
      <Box sx={
        {
          p: '10px 0',
          backgroundColor: (mode === 'dark' ? '#34495e' : '#1976d2'),
          width: '100%',
          height: (theme) => theme.trelloCustom.boardContentHeight
        }
      }>
        <ListColumns columns={ orderedColumns } />
        <DragOverlay dropAnimation={CustomDropAnimation}>
          {(activeDragItemType === ACTIVE_DRAG_ITEM_TYPE.COLUMN) && <Column column={activeDragItemData} />}
          {(activeDragItemType === ACTIVE_DRAG_ITEM_TYPE.CARD) && <Card card={activeDragItemData} />}
        </DragOverlay>
      </Box>
    </DndContext>
  )
}

export default BoardContent

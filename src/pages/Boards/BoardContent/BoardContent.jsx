import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box'
import { useColorScheme } from '@mui/material/styles'
import ListColumns from './ListColumns/ListColumns'
import * as sort from '~/utils/sort'
import { DndContext, useSensor, useSensors, MouseSensor, TouchSensor } from '@dnd-kit/core'
import { arrayMove } from '@dnd-kit/sortable'

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

  useEffect(() => {
    const orderedColumns = sort.mapOrder(board?.columns, board?.columnOrderIds, '_id')
    // eslint-disable-next-line
    setOrderedColumns(orderedColumns)
  }, [board])


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
  }

  return (
    <DndContext onDragEnd={handleOnDragEnd} sensors={sensor}>
      <Box sx={
        {
          p: '10px 0',
          backgroundColor: (mode === 'dark' ? '#34495e' : '#1976d2'),
          width: '100%',
          height: (theme) => theme.trelloCustom.boardContentHeight
        }
      }>
        <ListColumns columns={ orderedColumns } />
      </Box>
    </DndContext>
  )
}

export default BoardContent

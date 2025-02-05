import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import BoardReadForm from "../components/BoardReadForm"
import * as axiosClient from "../api/board"

// Vue와 다르게 React는 화면을 출력하는 영역과 이에 대한 처리 로직이 존재하는 영역이 공존하고 있음
// 이것 때문에 사실상 관심사의 분리 측면에서 다소 어지러운 측면이 존재함

// 그럼 왜 이런 것을 여전히 현업에서 사용하고 있는가?
// 시장 진입을 먼저 했기 때문(관성)입니다.  -> 왜 아직도 SI는 JSP를 쓰나요? 와 같은 질문
const BoardReadPage = ({ match, history }) => {
  const { boardId } = useParams()

  const [board, setBoard] = useState(null)
  const [isLoading, setLoading] = useState(false)

  const navigate = useNavigate()

  const readBoard = async (boardId) => {
    setLoading(true)

    try {
        const response = await axiosClient.fetchBoard(boardId)
        setBoard(response.data)
        setLoading(false)
    } catch (e) {
        throw e
    }
  }

  const onRemove = async () => {
    try {
        // removeBoard가 실질적으로 문제를 발생시킬 수 있음
        await axiosClient.removeBoard(boardId)
        alert('게시물이 삭제되었습니다.')
        navigate("/")
    } catch (e) {
        console.log(e)
    }
  }

  // const readBoard = async (boardId) => 여기로 날림
  useEffect(() => {
    readBoard(boardId)
  }, [boardId])

  // vue에서 template부분
  return (
    <BoardReadForm boardId={boardId} board={board} isLoading={isLoading} onRemove={onRemove}/>
  )
}

export default BoardReadPage
import { ApiResponseDTO } from "@/type/common/common.type"
import { JoinAdditionalRequestDTO, JoinRequestDTO } from "@/type/member/member.type"

export const joinAdditionalApi = async (joinDto: JoinAdditionalRequestDTO): Promise<ApiResponseDTO> => {
    console.log("joinAdditionalApi joinDto", joinDto)
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/members/join`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        credentials: "include",
        body: JSON.stringify(joinDto)
    })

    if(!response.ok) throw new Error("")
    const datas: ApiResponseDTO = await response.json()
    return datas
}

export const joinApi = async (joinDto: JoinRequestDTO): Promise<ApiResponseDTO> => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/members/join`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        credentials: "include",
        body: JSON.stringify(joinDto)
    })

    if(!response.ok) throw new Error("")
    const datas: ApiResponseDTO = await response.json()
    return datas
}
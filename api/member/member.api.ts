import { FileFolder } from "@/enum/file.type"
import { ApiResponseDTO } from "@/type/common/common.type"
import { JoinAdditionalRequestDTO, JoinRequestDTO } from "@/type/member/member.type"
import { ProfileUpdateRequestDTO } from "./member.type"

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

// 프로필 사진 수정
export const updateProfileApi = async (filedto: ProfileUpdateRequestDTO): Promise<ApiResponseDTO> => {
    const formData = new FormData()
    formData.append("file", filedto.file)
    formData.append("folder", FileFolder.PROFILE)

    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/members/${filedto.id}/profile`, {
        method: "PUT",
        credentials: "include",
        body: formData
    })

    if(!response.ok) throw new Error("프로필 변경에 실패하였습니다.")
    const datas: ApiResponseDTO = await response.json()
    return datas
}
import React from 'react'
interface SectionHeaderTextProps {
    header: string,
    text: string
}
const SectionHeaderText: React.FC<SectionHeaderTextProps> = ({ header, text }: SectionHeaderTextProps) => {
    return (
        <div className="d-flex justify-center items-center my-3">
            <div className="text-center text-3xl">{header}</div>
            <div className="text-center text-gray-400">{text}</div>
        </div>
    )
}

export default SectionHeaderText
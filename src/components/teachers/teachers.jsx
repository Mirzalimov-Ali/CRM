import React from "react";
import { Link } from "react-router-dom";
import { teacherData } from "../mock/teacherData"
import { AddTeacherButton, FullNameTd, SearchIcon, SearchTeachers, Table, Td, TdHead, TeacherPhoto, TeachersPageContainer, TeachersPageContainerTop, TeachersTable, THead, Tr, TrHead } from "./style"

import search from "../../assets/search-icon.svg"
import plus from "../../assets/plus-icon.svg"
import { AddTeacherModal } from "./addTeacherModal";

function TeachersPage() {
    const [open, setOpen] = React.useState(false)
    const data = teacherData.maindata
    
    return (
        <TeachersPageContainer>
            <TeachersPageContainerTop>
                <SearchTeachers type="text" placeholder="Search teacher..."/>
                <SearchIcon src={search} />
                <AddTeacherModal open={open} setOpen={setOpen}/>
                <AddTeacherButton onClick={() => setOpen(true)}> <img src={plus} alt="" width={'16px'}/> Add teacher</AddTeacherButton>
            </TeachersPageContainerTop>

            <Table>
                <THead>
                    <TrHead style={{height: '50px'}}>
                        <FullNameTd className="td">Full name</FullNameTd>
                        <Td className="td" style={{marginRight: "30px"}}>Phone number</Td>
                        <Td className="td" style={{marginRight: "10px"}}>Groups</Td>
                        <Td className="td">Percent</Td>
                    </TrHead>
                </THead>
                <tbody>
                    {data.map((value, key)=> {
                        const fullName = value.teacher.fullName;
                        const initials = fullName.split(' ').map(name => name.charAt(0)).join('')
                        return (
                            <Link to={`/teacher/${value.id}`} style={{textDecoration: "none"}}>
                                <Tr key={key}>
                                    <FullNameTd> 
                                        {value.teacher.photo 
                                            ? <img src={value.teacher.photo} alt="" style={{width: "40px", height: "40px", borderRadius: '50%'}}/> 
                                            : <TeacherPhoto>{initials}</TeacherPhoto>
                                        }
                                        {value.teacher.fullName}
                                    </FullNameTd>
                                    <Td style={{marginRight: "30px"}}>{value.teacher.phoneNumber}</Td>
                                    <Td>{value.teacher.groups} group</Td>
                                    <Td>{value.teacher.percent}</Td>
                                </Tr>
                            </Link>
                        )
                    })}
                </tbody>
            </Table>
        </TeachersPageContainer>
    )
}

export default TeachersPage
import React from 'react'
import { AddLead, Icon, LeadsContainer, LeadsNavbar, Menu, MenuWrapper, ResetFilter, SearchSection, SearchSectionOption, SearchStudent } from './style'

import vMenu from '../../assets/vmenu-icon.svg'
import gridMenu from '../../assets/gridMenu-icon.svg'
import searchIcon from '../../assets/search-icon.svg'
import resetIcon from '../../assets/reset-icon.svg'
import plusIcon from '../../assets/plus-icon.svg'
import GridMenu from './gridMenu'
import VMenu from './vMenu'
import AddNewLead from './addNewLeadModal'
import AddNewLeadModal from './addNewLeadModal'

function Leads() {
  const [open, setOpen] = React.useState(false)
  const [activeMenu, setActiveMenu] = React.useState(true);

  function handleMenuClick() {
    setActiveMenu(true)
  }

  function handleGridMenu() {
    setActiveMenu(false)
  }
  return (
    <LeadsContainer>
      <LeadsNavbar>
        <MenuWrapper>
          <Menu $vmenu onClick={handleGridMenu} active={!activeMenu}>
            <Icon src={vMenu} alt="Vertical Menu" active={!activeMenu}/>
          </Menu>
          <Menu onClick={handleMenuClick} active={activeMenu}>
            <Icon src={gridMenu} alt="Grid Menu" active={activeMenu}/>
          </Menu>

          <SearchStudent>
            <img src={searchIcon} alt="" />
            <input type="text" placeholder='Search student...'/>
          </SearchStudent>

          <SearchSection>
            <SearchSectionOption value="1" style={{color: "gray"}}>Search lead section</SearchSectionOption>
            <SearchSectionOption value="2">Elementary</SearchSectionOption>
            <SearchSectionOption value="3">Beginner</SearchSectionOption>
          </SearchSection>

          <SearchSection style={{margin: "0 15px"}}>
            <SearchSectionOption value="1" style={{color: "gray"}}>From where</SearchSectionOption>
            <SearchSectionOption value="2">Telegram</SearchSectionOption>
          </SearchSection>

          <ResetFilter><img src={resetIcon} alt="" />Reset filter</ResetFilter>

          <AddLead onClick={() => setOpen(true)}><img src={plusIcon} alt="" />Add lead</AddLead>
        </MenuWrapper>
      </LeadsNavbar>
      
      {
        activeMenu ? <GridMenu/> : <VMenu/>
      }

      <AddNewLeadModal open={open} setOpen={setOpen}/>
  </LeadsContainer>
  )
}

export default Leads
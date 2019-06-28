// Store default values
const t_head_info = {
  thead_user_id: {
    default_text: 'User ID'
  },
  thead_family_name: {
    default_text: 'Family Name'
  },
  thead_given_name: {
    default_text: 'Given Name'
  },
  thead_user_name: {
    default_text: 'User Name'
  },
  thead_programs: {
    default_text: 'Programs'
  },
  thead_status: {
    default_text: 'Status'
  },
  thead_avg_session: {
    default_text: 'Avg. Session'
  },
  thead_last_active: {
    default_text: 'Last Active'
  },
}

const submenu_labels = {
  custom: [
    'Custom 1',
    'Custom 2',
  ]
}

function showSubmenu() {
  const submenuElemUl = document.querySelectorAll('.js-submenu');
  // This hides all UL with '.js-submenu' classnames
  for (let i = 0; i < submenuElemUl.length; i++) {
    submenuElemUl[i].style.display = 'none'
  }
  const _self = this;
  // This shows the children of the clicked 'thead'
  if (_self.children[1]) {
    _self.children[1].style.display = 'block'
  }
}

function switchData(tHeadId, self, subLabel, key) {
  const t_head_elem = document.querySelector(`#${tHeadId} span`);
  const sub_menu_navs = document.querySelectorAll(`#${tHeadId} .js-submenu-nav`);
  const default_text = t_head_info[tHeadId].default_text
  const original_text = submenu_labels[subLabel]

  if (default_text !== self.textContent) {
    t_head_elem.innerText = self.textContent
    self.innerText = default_text
  } else {
    t_head_elem.innerText = default_text
    self.innerText = original_text[key]
  }
  // Revert 'li' to its original value
  for (let i = 0; i < sub_menu_navs.length; i++) {
    if (i !== key) {
      sub_menu_navs[i].innerText = original_text[i]
    }
  }
}

document.addEventListener('DOMContentLoaded', function(event){
  // Upon the load of DOM, attach event listner to 'thead' with '.js-hasSubmenu'
  const submenuElem = document.querySelectorAll('.js-hasSubmenu');
  for (let i = 0; i < submenuElem.length; i++) {
    submenuElem[i].addEventListener('click', showSubmenu)
  }
});

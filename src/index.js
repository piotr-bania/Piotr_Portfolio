import * as THREE from 'three'
import './styles/main.scss'
import './scripts/animated_text'
import './scripts/menu'
import './scripts/progress_bar'

import logo from './assets/images/logo/PB logo.svg'
const logoPB = document.getElementById('logo')
logoPB.src = logo

import openMenu from './assets/images/icons/menu-closed.svg'
const open_menu = document.getElementById('open-menu')
open_menu.src = openMenu

import closedMenu from './assets/images/icons/menu-open.svg'
const close_menu = document.getElementById('closed-menu')
close_menu.src = closedMenu
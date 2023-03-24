class Tabs {
    static CLASS_NAV_ITEM = 'nav__item'
    static CLASS_NAV_ITEM_ACTIVE = 'nav__item--active'
    static CLASS_CONT_ITEM = 'content__item'
    static CLASS_CONT_ITEM_ACTIVE= 'content__item--active'

    constructor(element) {
        this.tabs = element
        this.navItems = Array.from(document.querySelector('#navigator').children)
        this.contentItems = Array.from(document.querySelector('#content').children)
        this.indexOfActiveItem = 0


        this.bindStyles()
        this.bindEvents()
    }

    bindEvents(){
        this.tabs.addEventListener(`click`, this.onTabsClick.bind(this))
    }

    bindStyles(){
        this.addBasicClassForNavItems()
        this.addBasicClassForContItems()
        this.addActiveClass(this.indexOfActiveItem)
    }

    onTabsClick(e) {
        const target = e.target
        if (!this.isNavButton(target)){
            return
        }
        this.currentIndex = this.findActiveItem(target)
        if (this.isClickOnActiveButton()) {
            return
        }
        this.removeActiveClass(this.indexOfActiveItem)
        this.addActiveClass(this.currentIndex)
        this.indexOfActiveItem = this.currentIndex
    }

    removeActiveClass(index){
        this.navItems[index].classList.remove(Tabs.CLASS_NAV_ITEM_ACTIVE)
        this.contentItems[index].classList.remove(Tabs.CLASS_CONT_ITEM_ACTIVE)
    }

    addActiveClass(index){
        this.navItems[index].classList.add(Tabs.CLASS_NAV_ITEM_ACTIVE)
        this.contentItems[index].classList.add(Tabs.CLASS_CONT_ITEM_ACTIVE)
    }

    isClickOnActiveButton() {
        return this.indexOfActiveItem === this.currentIndex
    }

    isNavButton(target) {
        const navElemButton = target.closest('.nav__item')

        return Boolean(navElemButton)
    }

    findActiveItem(target) {
       return this.navItems.indexOf(target)
    }

    addBasicClassForNavItems(){
        this.navItems.forEach((navItem) => {
            navItem.classList.add(Tabs.CLASS_NAV_ITEM)
        })
    }

    addBasicClassForContItems() {
        this.contentItems.forEach((contentItem) => {
            contentItem.classList.add(Tabs.CLASS_CONT_ITEM)
        })
    }
}

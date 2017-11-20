(function () {

    initMobileMenu()
    if (PAGE_TYPE) {
        initSubHeaders()
        makeAnchorLink()
    }

    /**
     * Mobile burger menu button for toggling sidebar
     */

    function initMobileMenu() {
        var mobileBar = document.getElementById('mobile-bar')
        var sidebar = document.querySelector('.sidebar')
        var body = document.querySelector('body')
        var menuButton = mobileBar.querySelector('.menu-button')

        menuButton.addEventListener('click', function () {
            sidebar.classList.toggle('open')
            body.classList.toggle('sidebar-open')
        })

        document.body.addEventListener('click', function (e) {
            if (e.target !== menuButton && !sidebar.contains(e.target)) {
                sidebar.classList.remove('open')
                body.classList.remove('sidebar-open')
            }
        })
    }

    /**
     * Doc version select
     */

    var version = document.querySelectorAll('.version-select');

    for (var i = 0, len = version.length; i < len; i++) {
        version[i].addEventListener('change', function (e) {
            var version = e.target.value
            window.location.assign('http://docs.qadmin.com/' + version + '/');
        });
    }
    /**
     * Sub headers in sidebar
     */

    function initSubHeaders() {
        var each = [].forEach
        var main = document.getElementById('main')
        var header = document.getElementById('header')
        var sidebar = document.querySelector('.sidebar')
        var content = document.querySelector('.content')

        // build sidebar
        var currentPageAnchor = sidebar.querySelector('.sidebar-link.current')
        var isGuide = document.querySelector('.content').classList.contains('guide')
        if (currentPageAnchor || isGuide) {
            var allHeaders = []
            var sectionContainer
            if (isGuide) {
                sectionContainer = document.querySelector('.menu-root')
            } else {
                sectionContainer = document.createElement('ul')
                sectionContainer.className = 'menu-sub'
                currentPageAnchor.parentNode.appendChild(sectionContainer)
            }
            var headers = content.querySelectorAll('h2')
            if (headers.length) {
                each.call(headers, function (h) {
                    sectionContainer.appendChild(makeLink(h))
                    var h3s = collectH3s(h)
                    allHeaders.push(h)
                    allHeaders.push.apply(allHeaders, h3s)
                    if (h3s.length) {
                        sectionContainer.appendChild(makeSubLinks(h3s, isGuide))
                    }
                })
            } else {
                headers = content.querySelectorAll('h3')
                each.call(headers, function (h) {
                    sectionContainer.appendChild(makeLink(h))
                    allHeaders.push(h)
                })
            }

            var animating = false
            sectionContainer.addEventListener('click', function (e) {
                e.preventDefault()
                if (e.target.classList.contains('section-link')) {
                    sidebar.classList.remove('open')
                    setActive(e.target)
                    animating = true
                    setTimeout(function () {
                        animating = false
                    }, 400)
                }
            }, true)

            // make links clickable
            allHeaders.forEach(makeHeaderClickable)

            smoothScroll.init({
                speed: 400,
                offset: window.innerWidth > 720 ? 105 : 65
            })
        }

        var hoveredOverSidebar = false
        sidebar.addEventListener('mouseover', function () {
            hoveredOverSidebar = true
        })
        sidebar.addEventListener('mouseleave', function () {
            hoveredOverSidebar = false
        })

        // listen for scroll event to do positioning & highlights
        window.addEventListener('scroll', updateSidebar)
        window.addEventListener('resize', updateSidebar)

        function updateSidebar() {
            var doc = document.documentElement
            var top = doc && doc.scrollTop || document.body.scrollTop + 105
            if (animating || !allHeaders) return
            var last
            for (var i = 0; i < allHeaders.length; i++) {
                var link = allHeaders[i]
                if (link.offsetTop > top) {
                    if (!last) last = link
                    break
                } else {
                    last = link
                }
            }
            if (last)
                setActive(last.id, !hoveredOverSidebar)
        }

        function makeLink(h) {
            var link = document.createElement('li')
            var text = h.textContent.replace(/\(.*\)$/, '')
            link.innerHTML =
                '<a class="section-link" data-scroll href="#' + h.id + '">' +
                text +
                '</a>'
            return link
        }

        function collectH3s(h) {
            var h3s = []
            var next = h.nextSibling
            while (next && next.tagName !== 'H2') {
                if (next.tagName === 'H3') {
                    h3s.push(next)
                }
                next = next.nextSibling
            }
            return h3s
        }

        function makeSubLinks(h3s, small) {
            var container = document.createElement('ul')
            if (small) {
                container.className = 'menu-sub'
            }
            h3s.forEach(function (h) {
                container.appendChild(makeLink(h))
            })
            return container
        }

        function setActive(id, shouldScrollIntoView) {
            var previousActive = sidebar.querySelector('.section-link.active')
            var currentActive = typeof id === 'string' ?
                sidebar.querySelector('.section-link[href="#' + id + '"]') :
                id
            if (currentActive !== previousActive) {
                if (previousActive) previousActive.classList.remove('active')
                currentActive.classList.add('active')
                if (shouldScrollIntoView) {
                    var currentPageOffset = currentPageAnchor ? currentPageAnchor.offsetTop - 10 : 0
                    var currentActiveOffset = currentActive.offsetTop + currentActive.parentNode.clientHeight
                    var sidebarHeight = sidebar.clientHeight
                    var currentActiveIsInView = (
                        currentActive.offsetTop >= sidebar.scrollTop &&
                        currentActiveOffset <= sidebar.scrollTop + sidebarHeight
                    )
                    var linkNotFurtherThanSidebarHeight = currentActiveOffset - currentPageOffset < sidebarHeight
                    var newScrollTop = currentActiveIsInView ?
                        sidebar.scrollTop :
                        linkNotFurtherThanSidebarHeight ?
                            currentPageOffset :
                            currentActiveOffset - sidebarHeight
                    sidebar.scrollTop = newScrollTop
                }
            }
        }

        function makeHeaderClickable(link) {
            var wrapper = document.createElement('a')
            wrapper.href = '#' + link.id
            wrapper.setAttribute('data-scroll', '')
            link.parentNode.insertBefore(wrapper, link)
            wrapper.appendChild(link)
        }
    }


    function makeAnchorLink() {
        var link = document.querySelectorAll('.content a[href^="#"]:not(.headerlink)');

        for (var i = 0; i < link.length; i++) {
            var tag = link[i].firstChild.tagName;
            if (tag !== 'H2' && tag !== 'H3') {
                link[i].setAttribute('data-scroll', '')
            }
        }
    }


})()

// document.addEventListener("DOMContentLoaded", function () {
window.addEventListener("load", function () {

    window.scrollTo(0, 0);


    heading_elements = document.querySelectorAll('.container .module-head .m-headings div');
    hr_element = document.querySelector('.container .module-head  hr');
    content_elements = document.querySelectorAll('main .container .content>div')

    for (let i = 0; i < 4; i++) {

        heading_elements[i].addEventListener("click", () => {

            for (let j = 0; j < 4; j++) {
                heading_elements[j].style.color = `rgb(147,147,147)`;
                content_elements[j].style.display = `none`;


            }
            hr_element.style.transform = `translate(${i * 100}%,0)`;
            heading_elements[i].style.color = `#10C3F8`;
            content_elements[i].style.display = `revert`;


        })
    }

    // setting dropdowns 


    dropdowns = document.querySelectorAll("nav .dropdown")
    courses_dropdown = dropdowns[0]
    job_dropdown = dropdowns[1]
    business_dropdown = dropdowns[2]


    course_grid = document.querySelector("nav .container .course_grid");
    job_grid = document.querySelector("nav .nav-upper-right li.job");
    business_grid = document.querySelector("nav .nav-upper-right li.business");

    business_dropdown.style.left = `${business_grid.getBoundingClientRect().left}px`

    function toggle_dropdown(clickIt, dropdown) {
        clickIt.addEventListener("click", () => {
            event.stopPropagation()
            if (dropdown.style.display == 'block') {
                dropdown.style.display = 'none';
            }
            else {
                dropdown.style.display = 'block';

            }
        })
    }
    toggle_dropdown(course_grid, courses_dropdown)
    toggle_dropdown(job_grid, job_dropdown)
    toggle_dropdown(business_grid, business_dropdown)

    body = document.querySelector('body')
    function close_dropdown(dropdowns) {
        body.addEventListener("click", () => {
            dropdowns.style.display = 'none';
        })
    }
    close_dropdown(courses_dropdown)
    close_dropdown(job_dropdown)
    close_dropdown(business_dropdown)

    //hamburger
    let hamburger = document.querySelector("nav .nav-upper-right .hamburger")
    let ham_expand = document.querySelector("nav .nav-upper-right .ham-expand")

    // toggle_dropdown(hamburger, ham_expand)

    // hamburger dropdowns

    let ham_course = document.querySelector(".ham-expand .courses>p")
    let ham_job = document.querySelector(".ham-expand .job>p")
    let ham_business = document.querySelector(".ham-expand .business>p")

    let ham_course_expand = document.querySelector(".ham-expand .courses-expand")
    let ham_job_expand = document.querySelector(".ham-expand .job-expand")
    let ham_business_expand = document.querySelector(".ham-expand .business-expand")

    toggle_dropdown(ham_course, ham_course_expand)
    toggle_dropdown(ham_job, ham_job_expand)
    toggle_dropdown(ham_business, ham_business_expand)


    // closing hamburger dropdown when screen width increases 
    window.addEventListener('resize', () => {
        const windowWidth = window.innerWidth;
        if (windowWidth > 510) {
            ham_expand.style.display = "none";
        } else {
            ham_expand.style.display = "block"
        }
        business_dropdown.style.left = `${business_grid.getBoundingClientRect().left}px`
    });

    hamburger.addEventListener("click", () => {

        console.log(ham_expand.clientHeight);
        if (!ham_expand.clientHeight) {
            ham_expand.style.maxHeight = 800 + "px"
        }
        else {
            ham_expand.style.maxHeight = 0


        }
    })


    // expanding module content 
    clickModuleToExpand = document.querySelectorAll('main .container .content .module-content>div:first-child')

    contentToExpand_parent = document.querySelectorAll('main .container .content .expand-content')
    contentToExpand = document.querySelectorAll('main .container .content .expand-content > div')

    for (let i = 0; i < clickModuleToExpand.length; i++) {
        clickModuleToExpand[i].addEventListener("click", () => {


            if (!contentToExpand_parent[i].clientHeight) {
                contentToExpand_parent[i].style.height = contentToExpand[i].clientHeight + 25 + "px"
                // parent's height is 25px more ; can use help of inspect 
            }
            else {
                contentToExpand_parent[i].style.height = 0
            }
        })

    }// BELOW IS MUCH SIMPLER WAY


    //expanding free videos content 
    clickToExpandFreeVideos = document.querySelector('.free-videos-content div:first-child')
    expandedFreeVideos = document.querySelector('.free-videos-content .free-videos-expand')


    clickToExpandFreeVideos.addEventListener("click", () => {

        if (!expandedFreeVideos.clientHeight) {
            expandedFreeVideos.style.maxHeight = 1812 + "px"
        }
        else {
            expandedFreeVideos.style.maxHeight = 0


        }
    })


})









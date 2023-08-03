// document.addEventListener("DOMContentLoaded", function () {
window.addEventListener("load", function () {



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

    nav_upper = document.querySelector("nav .nav-upper .container");
    bottom_dist = nav_upper.getBoundingClientRect().bottom;

    dropdowns = document.querySelectorAll("nav .dropdown")
    courses_dropdown = dropdowns[0]
    job_dropdown = dropdowns[1]
    business_dropdown = dropdowns[2]

    courses_dropdown.style.top = `${bottom_dist}px`
    job_dropdown.style.top = `${bottom_dist}px`
    business_dropdown.style.top = `${bottom_dist}px`

    course_grid = document.querySelector("nav .container .course_grid");
    job_grid = document.querySelector("nav .nav-upper-right li.job");
    business_grid = document.querySelector("nav .nav-upper-right li.business");

    courses_grid_left = course_grid.getBoundingClientRect().left;
    job_grid_left = job_grid.getBoundingClientRect().left;
    business_grid_left = business_grid.getBoundingClientRect().left;

    courses_dropdown.style.left = `${courses_grid_left - 30}px`
    job_dropdown.style.left = `${job_grid_left - 30}px`
    business_dropdown.style.left = `${business_grid_left - 10}px`

    function toggle_dropdown(clickIt, dropdown) {
        clickIt.addEventListener("click", () => {
            event.stopPropagation()
            if (dropdown.style.display == 'block') {
                dropdown.style.display = 'none';
            }
            else {
                dropdown.style.display = 'block';
                // console.log("clicked dropdown");

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


    // expanding module content 
    clickModuleToExpand = document.querySelectorAll('main .container .content .module-content>div:first-child')

    contentToExpand_parent = document.querySelectorAll('main .container .content .expand-content')
    contentToExpand = document.querySelectorAll('main .container .content .expand-content > div')

    for (let i = 0; i < clickModuleToExpand.length; i++) {
        clickModuleToExpand[i].addEventListener("click", () => {
            console.log(contentToExpand[i].clientHeight);
            console.log(contentToExpand_parent[i].clientHeight);


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

    console.log(expandedFreeVideos.clientHeight);
    console.log(clickToExpandFreeVideos.clientHeight);

    clickToExpandFreeVideos.addEventListener("click", () => {
        console.log(expandedFreeVideos.clientHeight);
        console.log(clickToExpandFreeVideos.clientHeight);

        if (!expandedFreeVideos.clientHeight) {
            expandedFreeVideos.style.maxHeight = 1812 + "px"
        }
        else {
            expandedFreeVideos.style.maxHeight = 0


        }
    })

})








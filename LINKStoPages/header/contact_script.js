window.addEventListener("load", function () {




    // setting dropdowns 

    nav_upper = document.querySelector("nav .nav-upper .container")
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

})









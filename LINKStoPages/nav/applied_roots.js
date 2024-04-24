
window.addEventListener("load", () => {

    var timeout;
    feature_names = document.querySelectorAll("#about-course .details .right .feature-name");
    course_features = document.querySelectorAll("#about-course .details .right .course-features");
    feature_details = document.querySelectorAll("#about-course .details .right .feature-detail");
    feature_details_parent = document.querySelectorAll("#about-course .details .right .course-features > div");

    feature_details_parent[0].classList.add('notransition')
    feature_names[0].classList.add("feature-name-toggle")
    course_features[0].classList.add("course-features-toggle")
    // https://stackoverflow.com/a/16575811/12155544
    feature_details_parent[0].style.maxHeight = `300px`

    feature_details_parent[0].classList.remove('notransition')










    for (let i = 0; i < feature_names.length; i++) {




        feature_names[i].addEventListener("click", () => {


            console.log(feature_details_parent[i].style.height);
            if (feature_details_parent[i].style.maxHeight == '0px' || feature_details_parent[i].style.maxHeight == '') {

                feature_details_parent[i].style.maxHeight = `300px`

                clearTimeout(timeout)
                feature_names[i].classList.add("feature-name-toggle")
                course_features[i].classList.add("course-features-toggle")
            }
            else {

                timeout = setTimeout(() => {
                    feature_names[i].classList.remove("feature-name-toggle")
                    course_features[i].classList.remove("course-features-toggle")
                }, 400)
                feature_details_parent[i].style.maxHeight = `0px`

            }


        })



    }

})
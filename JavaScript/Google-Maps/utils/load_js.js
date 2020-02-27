const load_js = (url, fn = function () { }) => {
    var script = document.createElement('script');


    script.type = 'text/javascript';



    //IE

    if (script.readyState) {

        script.onreadystatechange = function () {

            if (script.readyState == 'loaded' || script.readyState == 'complete') {

                script.onreadystatechange = null;

                fn();

            }

        };

    } else {

        //其他浏览器

        script.onload = function () {

            fn();

        };
    }
    script.src = url;
    document.getElementsByTagName('head')[0].appendChild(script);
}
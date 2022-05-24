var Links = {
    linksSetColor: function (color) {
        var alist = document.querySelectorAll('a');
        var i = 0;
        while (i < alist.length) {
            alist[i].style.color = color;
            i += 1;
        }
    },

}

var Body = {
    bodysetColor: function (color) {
        document.querySelector('body').style.color = color;
    },
    bodySetBackgroundColor: function (color) {
        document.querySelector('body').style.backgroundColor = color;
    },

}

function nightdayHandler(self) {
    //var target = document.querySelector('body');

    if (self.value === 'night') {
        //target.style.backgroundColor = 'black';
        //target.style.color = 'white';
        Body.bodySetBackgroundColor('black');
        Body.bodysetColor('white');

        self.value = 'day';
        Links.linksSetColor('powderblue');
        /*var links = document.querySelectorAll('a');
        var i = 0;
        while (i < links.length) {
            links[i].style.color = 'powderblue';
            i += 1;
        }*/
        //////////// 이부분 함수로 묶어서 setColor로 만듦

    }
    else {
        //target.style.backgroundColor = 'white';
        //target.style = 'black';
        Body.bodySetBackgroundColor('white');
        Body.bodysetColor('black');
        self.value = 'night';

        Links.linksSetColor('blue');

        /*var links = document.querySelectorAll('a');
        var i = 0;
        while (i < links.length) {
            links[i].style.color = 'blue';
            i += 1;
        }*/
        //////////// 이부분 함수로 묶어서 setColor로 만듦

    }
}
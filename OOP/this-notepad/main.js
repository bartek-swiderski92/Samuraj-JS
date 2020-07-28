// 'use strict' // nie pozwoli na połączenie this z obiektem globalnym
// THIS

this //obiekt globalnego

const fn = function () {
    // this.a = 5;
    console.log(this.name);

}

// fn()

const obj = {
    name: 'Adam',
    showName: fn
}

const fun = fn;
// fun()

obj.showName()

const outside = obj.showName;
outside()

document.addEventListener('click', function () {
    console.log(this);
    const inside = function () {
        console.log(this);
    }
    inside()
})

// ____________________________________________________________________
const removeTask = (e) => {
    // console.log(e.target.parentNode);
    // e.target.parentNode.remove()
    // e.target.remove();

    // e.target.parentNode.style.textDecoration = 'line-through'
    // e.target.remove();
    const index = e.target.dataset.key;
    document.querySelector(`[data-key = "${index}"]`).remove()


}

document.querySelectorAll('button[data-key]').forEach(item => item.addEventListener('click', removeTask));
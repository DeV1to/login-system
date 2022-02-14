
function show_hide_password(target){
    let input = document.getElementById('password__input');
    if (input.getAttribute('type') == 'password') {
        input.setAttribute('type', 'text');
    } else {
        input.setAttribute('type', 'password');
    }
    return false;
}
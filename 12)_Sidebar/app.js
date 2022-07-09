const toggleBtn = document.querySelector('.sidebar-toggle');
const closeBtn = document.querySelector('.close-btn');
const sidebar = document.querySelector('.sidebar');

toggleBtn.addEventListener('click', function () {
    
    // Adding or removing class 'show-sidebar' to put or remove the sidebar from the screen
    if (sidebar.classList.contains('show-sidebar'))
        sidebar.classList.remove('show-sidebar');
    else
        sidebar.classList.add('show-sidebar');
    
    // sidebar.classList.toggle('show-sidebar'); // This one line is same as the top 4 lines
})

closeBtn.addEventListener('click', function () {
    
    sidebar.classList.remove('show-sidebar');
})
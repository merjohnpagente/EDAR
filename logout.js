function checker()
        {
            var r=confirm('Are you sure you want to log out?');
            if(r==false)
        {
            event.preventDefault();
        }
        else
        {
         window.location.href = 'index.html';

        }
        }
      
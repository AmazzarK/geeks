        function addUserProfileToNavbar(userName) {

            const navbar = document.querySelector('.navbar');
            
            
            const userProfileDiv = document.createElement('div');
            userProfileDiv.className = 'user-profile';
            
           
            const profileImg = document.createElement('img');
            profileImg.src = 'https://via.placeholder.com/30x30/4CAF50/ffffff?text=' + userName.charAt(0).toUpperCase();
            profileImg.alt = userName + ' profile picture';
            
            
            const userNameSpan = document.createElement('span');
            userNameSpan.className = 'user-name';
            userNameSpan.textContent = userName;
            
           
            userProfileDiv.appendChild(profileImg);
            userProfileDiv.appendChild(userNameSpan);
            
           
            navbar.appendChild(userProfileDiv);
            
        }
        
        addUserProfileToNavbar('Lamiaa');
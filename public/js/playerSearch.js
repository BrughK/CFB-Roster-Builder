

    async function getPlayer(a,b,c,d) {
    
        const apiUrl = `https://api.collegefootballdata.com/player/search?searchTerm=${a}&position=${b}&team=${c}&year=${d}
    `;
        try {
          const response = await fetch(apiUrl, {
            method: 'GET',
            headers: {
              'Accept': 'application/json',
              'Authorization': "Bearer Ztn0VfU0cfZ0GaF/wDYhPTgQqXOvGa6mEb1ht26W0RyYW3aIg9BppDJW/ZC4KMza"
            },
            mode: 'no-cors'
          });
          const data = await response.json();
          console.log('Game data:', data);
          return data;
        } catch (error) {
          console.error('Error retrieving game data:', error);
        }
      }
    
    

// basic function to push player data into db

async function addPlayer(e) {

    const player = e.map(player => {
        return {
            team: player.team,
            firstName: player.firstName,
            lastName: player.lastName,
            jersey: player.jersey,
            position: player.position
        };
        }); 

    db.query(`INSERT INTO Players (first_name, last_name, team, jersey, position) VALUES ('${player[0].firstName}', '${player[0].lastName}', '${player[0].team}', '${player[0].jersey}, ${player[0].position}');`,
    function(err, res) {
        if (err) {
            console.log('\nInvalid, check constraints\n');
        db.query(`DELETE FROM Players WHERE (first_name, last_name, team, jersey, position) VALUES ('${player[0].firstName}', '${player[0].lastName}', '${player[0].team}', '${player[0].jersey}, ${player[0].position}');`);
        } else {
        console.log(`\nPlayer Added!\n`);
        }
    });
}





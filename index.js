
/* 1 piece - 4 squares
 * 2 pieces - 3 squares
 * 3 pieces - 2 squares
 * 4 pieces - 1 square
 *
 * Player's board
 *  [0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 3, 0, 0, 0],
    [0, 3, 3, 3, 0, 0, 3, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 3, 0, 0, 0],
    [0, 2, 2, 0, 0, 0, 0, 0, 0, 1],
    [0, 0, 0, 0, 0, 0, 2, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 2, 0, 0, 0],
    [0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [4, 4, 4, 4, 0, 2, 2, 0, 1, 0],
  *
  * Computer's ships
  * [0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 3, 0, 0, 0],
    [0, 3, 3, 3, 0, 0, 3, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 3, 0, 0, 0],
    [0, 2, 2, 0, 0, 0, 0, 0, 0, 1],
    [0, 0, 0, 0, 0, 0, 2, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 2, 0, 0, 0],
    [0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [4, 4, 4, 4, 0, 2, 2, 0, 1, 0],
 */


class Game {

    player_ships_coordinates;
    computer_ships_coordinates;

    fire_status;
    turn_status;
    attacked_ship_size;

    pointOne;
    pointTwo;

    player_ships_board;
    player_attack_board;
    computer_attack_board;
    computer_ships_board;

    constructor() {
        this.player_ships_board = [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        ];
        this.player_attack_board = JSON.parse(JSON.stringify(this.player_ships_board));
        this.computer_attack_board = JSON.parse(JSON.stringify(this.player_ships_board));
        this.computer_ships_board = JSON.parse(JSON.stringify(this.player_ships_board));

        this.placePlayerShips();
        this.placeComputerShips();
    }

    placePlayerShips() {
        // 1 square ships
        this.player_ships_board[0][1] = 1;
        this.player_ships_board[4][9] = 1;
        this.player_ships_board[7][3] = 1;
        this.player_ships_board[9][8] = 1;
        // 2 square ships
        this.player_ships_board[4][1] = 2;
        this.player_ships_board[4][2] = 2;

        this.player_ships_board[9][5] = 2;
        this.player_ships_board[9][6] = 2;

        this.player_ships_board[5][6] = 2;
        this.player_ships_board[6][6] = 2;
        // 3 square ships
        this.player_ships_board[2][1] = 3;
        this.player_ships_board[2][2] = 3;
        this.player_ships_board[2][3] = 3;

        this.player_ships_board[1][6] = 3;
        this.player_ships_board[2][6] = 3;
        this.player_ships_board[3][6] = 3;
        // 4 square ship
        this.player_ships_board[9][0] = 4;
        this.player_ships_board[9][1] = 4;
        this.player_ships_board[9][2] = 4;
        this.player_ships_board[9][3] = 4;

        console.log("Player's ships", this.player_ships_board);
    }

    placeComputerShips() {
        // 1 square ships
        this.computer_ships_board[0][1] = 1;
        this.computer_ships_board[4][9] = 1;
        this.computer_ships_board[7][3] = 1;
        this.computer_ships_board[9][8] = 1;
        // 2 square ships
        this.computer_ships_board[4][1] = 2;
        this.computer_ships_board[4][2] = 2;

        this.computer_ships_board[9][5] = 2;
        this.computer_ships_board[9][6] = 2;

        this.computer_ships_board[5][6] = 2;
        this.computer_ships_board[6][6] = 2;
        // 3 square ships
        this.computer_ships_board[2][1] = 3;
        this.computer_ships_board[2][2] = 3;
        this.computer_ships_board[2][3] = 3;

        this.computer_ships_board[1][6] = 3;
        this.computer_ships_board[2][6] = 3;
        this.computer_ships_board[3][6] = 3;
        // 4 square ship
        this.computer_ships_board[9][0] = 4;
        this.computer_ships_board[9][1] = 4;
        this.computer_ships_board[9][2] = 4;
        this.computer_ships_board[9][3] = 4;

        console.log("Computer's ships", this.computer_ships_board);
    }


    checkAroundHits() {
        let countHits = 0;

        // Check every position to avoid undefined error
        const x1 = this.pointOne;
        const x2 = this.pointTwo;
        const up = (x1 - 1 === -1) ? 0 : [x1 - 1, x2];
        const right = (x2 + 1 > 9) ? 0 : [x1, x2 + 2];
        const down = (x1 + 1 > 9) ? 0 : [x1 + 1, x2];
        const left = (x2 - 1 === -1) ? 0 : [x1, x2 - 1];

        // How many hits around hit point answers if ship is sunk or not: up, right, down, left
        if (up !== 0 && this.computer_ships_board[x1 - 1][x2] === "hit") {
            countHits++;
        } else if (right && this.computer_ships_board[x1][x2 + 1] === "hit") {
            countHits++;
        } else if (down && this.computer_ships_board[x1 + 1][x2] === "hit") {
            countHits++;
        } else if (left && this.computer_ships_board[x1][x2 - 1] === "hit") {
            countHits++;
        }

        if (countHits === 0) this.fire_status = "hit";

        if (countHits === 1 && this.attacked_ship_size === 1) {

        }



    }

    playerAttacksComputer() {
        const attackPoints = document.getElementById("attackPoints").value;
        if (attackPoints == 0) return null;

        const [pointOne, pointTwo] = attackPoints.split(',');

        this.attacked_ship_size = this.player_attack_board[pointOne][pointTwo];
        this.pointOne = pointOne;
        this.pointTwo = pointTwo;

        // Check if some ship was hit
        if (this.computer_ships_board[this.pointOne][this.pointTwo] !== 0) {
            // Check if it is 1 square ship
            if (this.computer_ships_board[this.pointOne][this.pointTwo] === 1) {
                this.computer_ships_board[this.pointOne][this.pointTwo] = "sunk";
            } else {
                this.checkAroundHits();
                this.computer_ships_board[this.pointOne][this.pointTwo] = this.fire_status;
            }
        }
    }
}

const gamePlay = new Game();

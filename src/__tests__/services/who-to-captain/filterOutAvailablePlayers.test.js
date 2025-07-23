import { filterOutAvailablePlayers } from "../../../services/who-to-captain/filterOutAvailablePlayers.js";

describe('filterOutAvailablePlayers', () => {
    test('Should filter out players with low chance of playing', () => {
        const players = [
            { name: 'Player A', chance_of_playing_this_round: 100 },
            { name: 'Player B', chance_of_playing_this_round: 75 },
            { name: 'Player C', chance_of_playing_this_round: 25 },
            { name: 'Player D', chance_of_playing_this_round: 0 }
        ];

        const result = filterOutAvailablePlayers(players);
        
        expect(result).toHaveLength(2);
        expect(result[0].name).toBe('Player A');
        expect(result[1].name).toBe('Player B');
    });

    test('Should include players with exactly 51% chance', () => {
        const players = [
            { name: 'Player A', chance_of_playing_this_round: 51 },
            { name: 'Player B', chance_of_playing_this_round: 50 }
        ];

        const result = filterOutAvailablePlayers(players);
        
        expect(result).toHaveLength(1);
        expect(result[0].name).toBe('Player A');
    });

    test('Should handle empty array', () => {
        const players = [];
        const result = filterOutAvailablePlayers(players);
        
        expect(result).toHaveLength(0);
    });

    test('Should handle players with missing chance_of_playing_this_round', () => {
        const players = [
            { name: 'Player A', chance_of_playing_this_round: 100 },
            { name: 'Player B' }, // missing property
            { name: 'Player C', chance_of_playing_this_round: 75 }
        ];

        const result = filterOutAvailablePlayers(players);
        
        expect(result).toHaveLength(2);
        expect(result[0].name).toBe('Player A');
        expect(result[1].name).toBe('Player C');
    });

    test('Should handle null and undefined values', () => {
        const players = [
            { name: 'Player A', chance_of_playing_this_round: 100 },
            { name: 'Player B', chance_of_playing_this_round: null },
            { name: 'Player C', chance_of_playing_this_round: undefined },
            { name: 'Player D', chance_of_playing_this_round: 75 }
        ];

        const result = filterOutAvailablePlayers(players);
        
        expect(result).toHaveLength(2);
        expect(result[0].name).toBe('Player A');
        expect(result[1].name).toBe('Player D');
    });
});
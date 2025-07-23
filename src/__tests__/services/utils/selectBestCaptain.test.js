import { selectBestCaptain } from "../../../services/utils/selectBestCaptain.js";

describe('selectBestCaptain', () => {
    test('Should select player with highest form', () => {
        const players = [
            { name: 'Player A', form: 5.0, ep_this: 8.0 },
            { name: 'Player B', form: 7.5, ep_this: 6.0 },
            { name: 'Player C', form: 3.2, ep_this: 9.0 }
        ];

        const result = selectBestCaptain(players);
        
        expect(result).toHaveLength(1);
        expect(result[0].name).toBe('Player B');
        expect(result[0].form).toBe(7.5);
    });

    test('Should use ep_this as tiebreaker when form is equal', () => {
        const players = [
            { name: 'Player A', form: 5.0, ep_this: 8.0 },
            { name: 'Player B', form: 5.0, ep_this: 10.0 },
            { name: 'Player C', form: 5.0, ep_this: 6.0 }
        ];

        const result = selectBestCaptain(players);
        
        expect(result).toHaveLength(1);
        expect(result[0].name).toBe('Player B');
        expect(result[0].ep_this).toBe(10.0);
    });

    test('Should handle empty array', () => {
        const players = [];
        const result = selectBestCaptain(players);
        
        expect(result).toHaveLength(0);
    });

    test('Should handle single player', () => {
        const players = [
            { name: 'Player A', form: 5.0, ep_this: 8.0 }
        ];

        const result = selectBestCaptain(players);
        
        expect(result).toHaveLength(1);
        expect(result[0].name).toBe('Player A');
    });

    test('Should handle players with missing properties', () => {
        const players = [
            { name: 'Player A', form: 5.0 }, // missing ep_this
            { name: 'Player B', ep_this: 8.0 }, // missing form
            { name: 'Player C', form: 7.0, ep_this: 6.0 }
        ];

        const result = selectBestCaptain(players);
        
        expect(result).toHaveLength(1);
        expect(result[0].name).toBe('Player C');
    });
});
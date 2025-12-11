import type { Coffee } from '../types/coffee';

export class CoffeeFactory {
    static createCoffee(type: string): Coffee {
        const coffees: Record<string, Coffee> = {
            'tsy-lefy': {
                id: '1',
                name: 'Tsy Lefy',
                description: 'Café fort et corsé',
                price: 3.5,
                brewingTime: 5000,
                image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085',
                strength: 4
            },
            'zoto': {
                id: '2',
                name: 'Zoto',
                description: 'Café doux et aromatique',
                price: 2.8,
                brewingTime: 4000,
                image: 'https://images.unsplash.com/photo-1511537190424-bbbab87ac5eb',
                strength: 2
            },
            'nescafe': {
                id: '3',
                name: 'Nescafé',
                description: 'Café instantané premium',
                price: 1.5,
                brewingTime: 2000,
                image: 'https://images.unsplash.com/photo-1570968915860-54d5c301fa9c',
                strength: 3
            },
            'kopiko': {
                id: '4',
                name: 'Kopiko',
                description: 'Café sucré caramélisé',
                price: 2.2,
                brewingTime: 3000,
                image: 'https://images.unsplash.com/photo-1561047029-3000c68339ca',
                strength: 3
            }
        };

        return coffees[type] || coffees['mescafe'];
    }
}
// src/data/casinoContent.ts (or backend/src/data/casinoContent.ts)

// --- Type Definitions for Casino Content ---
interface CasinoGame {
    id: string;
    title: string;
    provider: string;
    categories: string[];
    imageUrl: string;
    description: string;
    rtp: number; // Return To Player percentage
    volatility: 'Low' | 'Medium' | 'High' | 'Medium-Low' | 'Medium-High';
    isNew?: boolean;
    isPopular?: boolean;
}

interface Promotion {
    id: string;
    title: string;
    snippet: string;
    fullTerms: string;
    imageUrl: string;
    expiryDate: string; // ISO 8601 format (YYYY-MM-DD)
}

interface CasinoNews {
    id: string;
    title: string;
    snippet: string;
    fullContent: string;
    date: string; // ISO 8601 format (YYYY-MM-DD)
    tags: string[];
}

export interface CasinoContent {
    casinoGames: CasinoGame[];
    promotions: Promotion[];
    casinoNews: CasinoNews[];
}

// --- Dummy Casino Content Data ---
export const casinoContent: CasinoContent = {
    casinoGames: [
        {
            id: 'game_starburst',
            title: 'Starburst',
            provider: 'NetEnt',
            categories: ['slots', 'popular', 'low-volatility'],
            imageUrl: 'https://picsum.photos/seed/starburst/300/200',
            description: 'A vibrant and cosmic slot game with expanding wilds and re-spins.',
            rtp: 96.09,
            volatility: 'Low',
            isPopular: true,
        },
        {
            id: 'game_bookofdead',
            title: 'Book of Dead',
            provider: 'Play\'n GO',
            categories: ['slots', 'adventure', 'high-volatility'],
            imageUrl: 'https://picsum.photos/seed/bookofdead/300/200',
            description: 'Join Rich Wilde on an adventure to uncover ancient Egyptian treasures.',
            rtp: 96.21,
            volatility: 'High',
            isPopular: true,
        },
        {
            id: 'game_bonanzamegaways',
            title: 'Bonanza Megaways',
            provider: 'Big Time Gaming',
            categories: ['slots', 'megaways', 'high-volatility'],
            imageUrl: 'https://picsum.photos/seed/bonanza/300/200',
            description: 'Experience cascading reels and up to 117,649 ways to win.',
            rtp: 96.00,
            volatility: 'High',
        },
        {
            id: 'game_lightningroulette',
            title: 'Lightning Roulette',
            provider: 'Evolution Gaming',
            categories: ['live-casino', 'roulette', 'popular'],
            imageUrl: 'https://picsum.photos/seed/lightningroulette/300/200',
            description: 'Live Roulette with electrifying multipliers on straight up bets.',
            rtp: 97.30,
            volatility: 'Medium',
            isPopular: true,
        },
        {
            id: 'game_blackjackclassic',
            title: 'Classic Blackjack',
            provider: 'NetEnt',
            categories: ['table-games', 'blackjack'],
            imageUrl: 'https://picsum.photos/seed/classicblackjack/300/200',
            description: 'The timeless casino card game, aim for 21 without going bust.',
            rtp: 99.59,
            volatility: 'Low',
        },
        {
            id: 'game_megamoolah',
            title: 'Mega Moolah',
            provider: 'Microgaming',
            categories: ['slots', 'jackpot', 'progressive'],
            imageUrl: 'https://picsum.photos/seed/megamoolah/300/200',
            description: 'The famous progressive jackpot slot with life-changing payouts.',
            rtp: 88.12, // Lower RTP due to jackpot contribution
            volatility: 'Medium-High',
        },
        {
            id: 'game_gonzalo',
            title: 'Gonzo\'s Quest',
            provider: 'NetEnt',
            categories: ['slots', 'adventure'],
            imageUrl: 'https://picsum.photos/seed/gonzo/300/200',
            description: 'Join Gonzo in his quest for Eldorado with Avalanche Reels and Free Falls.',
            rtp: 95.97,
            volatility: 'Medium-High',
        },
        {
            id: 'game_gatesofolympus',
            title: 'Gates of Olympus',
            provider: 'Pragmatic Play',
            categories: ['slots', 'high-volatility', 'new'],
            imageUrl: 'https://picsum.photos/seed/olympus/300/200',
            description: 'Zeus watches over this slot with tumbling reels and multiplying symbols.',
            rtp: 96.50,
            volatility: 'High',
            isNew: true,
        },
        {
            id: 'game_dreamcatcher',
            title: 'Dream Catcher',
            provider: 'Evolution Gaming',
            categories: ['live-casino', 'game-show'],
            imageUrl: 'https://picsum.photos/seed/dreamcatcher/300/200',
            description: 'A super-sized money wheel game with simple rules and big wins.',
            rtp: 96.58,
            volatility: 'Low',
        },
        {
            id: 'game_immortalromance',
            title: 'Immortal Romance',
            provider: 'Microgaming',
            categories: ['slots', 'vampire', 'high-volatility'],
            imageUrl: 'https://picsum.photos/seed/immortalromance/300/200',
            description: 'A captivating vampire-themed slot with a rich storyline and multiple bonus features.',
            rtp: 96.86,
            volatility: 'High',
        },
        {
            id: 'game_roulettepro',
            title: 'Roulette Pro',
            provider: 'Playtech',
            categories: ['table-games', 'roulette'],
            imageUrl: 'https://picsum.photos/seed/roulettepro/300/200',
            description: 'A premium European Roulette experience with advanced betting options.',
            rtp: 97.30,
            volatility: 'Medium-Low',
        },
        {
            id: 'game_fruitparty',
            title: 'Fruit Party',
            provider: 'Pragmatic Play',
            categories: ['slots', 'fruit', 'high-volatility'],
            imageUrl: 'https://picsum.photos/seed/fruitparty/300/200',
            description: 'A bright and cheerful cluster pays slot with random multipliers.',
            rtp: 96.50,
            volatility: 'High',
        },
        {
            id: 'game_crazydiamonds',
            title: 'Crazy Diamonds',
            provider: 'iSoftBet',
            categories: ['slots', 'classic'],
            imageUrl: 'https://picsum.photos/seed/crazydiamonds/300/200',
            description: 'A classic 3-reel slot with shiny diamonds and simple gameplay.',
            rtp: 95.00,
            volatility: 'Medium',
        },
        {
            id: 'game_texasholdem',
            title: 'Texas Hold\'em Bonus Poker',
            provider: 'Evolution Gaming',
            categories: ['live-casino', 'poker'],
            imageUrl: 'https://picsum.photos/seed/texasholdem/300/200',
            description: 'Exciting live poker variant where you play against the dealer.',
            rtp: 97.96,
            volatility: 'Medium',
        },
        {
            id: 'game_moneytrain',
            title: 'Money Train 3',
            provider: 'Relax Gaming',
            categories: ['slots', 'high-volatility', 'new'],
            imageUrl: 'https://picsum.photos/seed/moneytrain3/300/200',
            description: 'The highly anticipated sequel with even bigger wins and features!',
            rtp: 96.50,
            volatility: 'High',
            isNew: true,
        },
    ],
    promotions: [
        {
            id: 'promo_welcome',
            title: '100% Welcome Bonus + 50 Free Spins!',
            snippet: 'Double your first deposit up to $500 and get 50 free spins on Starburst!',
            fullTerms: 'Minimum deposit $20. Wagering requirements 35x bonus and free spins winnings. Free spins valid for 7 days. Full T&Cs apply. This offer is only available to new players who have registered an account and made their first qualifying deposit.',
            imageUrl: 'https://picsum.photos/seed/welcomebonus/600/300',
            expiryDate: '2025-07-31', // Example date, adjust as needed
        },
        {
            id: 'promo_freespins',
            title: 'Friday Free Spins Frenzy',
            snippet: 'Deposit $30 or more every Friday and get 20 Free Spins on Book of Dead!',
            fullTerms: 'Offer valid every Friday between 00:00 UTC and 23:59 UTC. Max 20 free spins per player per week. Free spins valid for 24 hours from credit. Standard bonus terms and conditions apply.',
            imageUrl: 'https://picsum.photos/seed/freespins/600/300',
            expiryDate: '2025-12-31',
        },
        {
            id: 'promo_cashback',
            title: 'Weekly 10% Cashback',
            snippet: 'Get 10% of your net losses back every Monday, up to $200!',
            fullTerms: 'Cashback is calculated on net losses from Monday 00:00 UTC to Sunday 23:59 UTC. Minimum cashback $10. Cashback is wager-free. Full terms and conditions apply.',
            imageUrl: 'https://picsum.photos/seed/cashback/600/300',
            expiryDate: '2025-10-15',
        },
        {
            id: 'promo_newgame',
            title: 'New Game Boost: Money Train 3!',
            snippet: 'Play the new Money Train 3 and earn double loyalty points for a week!',
            fullTerms: 'Promotion valid for 7 days from launch. Loyalty points credited within 48 hours. See loyalty program terms for details. This promotion is subject to change or withdrawal at any time.',
            imageUrl: 'https://picsum.photos/seed/newgamepromo/600/300',
            expiryDate: '2025-07-07', // Example date, adjust as needed
        }
    ],
    casinoNews: [
        {
            id: 'news_bigwin',
            title: 'Lucky Player Hits Mega Jackpot on Mega Moolah!',
            snippet: 'A massive $5.4 million jackpot was just won on Mega Moolah by one of our lucky players.',
            fullContent: 'We are thrilled to announce that a new millionaire has been made on our platform! A player from [Country Name] struck a life-changing $5,432,100 jackpot on the legendary Mega Moolah progressive slot. This incredible win highlights the immense potential for big wins right here at our casino. Congratulations to our lucky winner!',
            date: '2025-06-20',
            tags: ['jackpot', 'big-win', 'mega-moolah'],
        },
        {
            id: 'news_provider',
            title: 'We Now Feature Games from Relax Gaming!',
            snippet: 'Exciting news! We\'ve partnered with Relax Gaming to bring you more thrilling slots and table games.',
            fullContent: 'Our casino lobby just got even better! We\'re proud to announce our new partnership with Relax Gaming, a leading provider known for innovative and high-quality casino games. This collaboration expands our already vast selection, bringing you even more exciting options to choose from. Look out for popular titles like Money Train 3 and Temple Tumble 2, now available!',
            date: '2025-06-18',
            tags: ['provider', 'new-games'],
        },
        {
            id: 'news_responsiblegaming',
            title: 'Responsible Gaming Awareness Month',
            snippet: 'Learn more about our tools and resources for responsible gaming this month.',
            fullContent: 'As part of our unwavering commitment to player well-being, June is our Responsible Gaming Awareness Month. We encourage all players to utilize our comprehensive suite of responsible gaming tools, including self-exclusion options, deposit limits, and session reminders. Please play responsibly and seek support if needed.',
            date: '2025-06-05',
            tags: ['responsible-gaming', 'player-safety'],
        },
        {
            id: 'news_newblackjack',
            title: 'New Live Blackjack Tables Added!',
            snippet: 'Experience even more variety with our newly added live blackjack tables from Evolution Gaming.',
            fullContent: 'Due to popular demand, we\'ve significantly expanded our Live Casino section with several brand new Blackjack tables powered by Evolution Gaming. Enjoy more seats, more professional dealers, and more ways to experience the thrill of hitting 21!',
            date: '2025-05-28',
            tags: ['live-casino', 'blackjack'],
        },
    ],
};

export const arrow = {

    // Return the string use an arrow function
    arrow() {
        const RickAndMorty = 'Rick and Morty';
        return () => RickAndMorty;
    },


    returnThis() {
        this.hello = 'world';
        return () => this;
    }
}

import {makeAutoObservable} from "mobx";

class PagesStore {
    page: number = 0;

    constructor() {
        makeAutoObservable(this)
    }

    changePage(newPage: number) {
        this.page = newPage;
    }
}

export default new PagesStore()
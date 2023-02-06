export class TableComponent {
    dummyData = {
        id: 5897,
        name: 'Name',
        size: 'Big',
        tag: '@tag'
    }

    changeTableValues = () => {
        this.dummyData.id = 5898;
        this.dummyData.name = 'New Name';
        this.dummyData.size = 'New big size';
        this.dummyData.tag = 'New tag';
    }

    changeTableValuesToOld = () => {
        this.dummyData.id = 5897;
        this.dummyData.name = 'Name';
        this.dummyData.size = 'Big';
        this.dummyData.tag = 'Tag';
    }

    buttonContent = 'Zamijeni vrijednost';

    fetchAdvice() {
        return fetch("https://api.adviceslip.com/advice")
          .then(r => r.ok ? r.json() : (() => { throw new Error('Unable to fetch NASA APOD data') }))
      }
}


import {useState} from 'react';
import Contract from "./Contract";
import styles from './contacts.module.css';

const data = [{
    firstName: "Барней",
    lastName: "Стинсовський",
    phone: "+380956319521",
    gender: "male",
}, {
    firstName: "Робін",
    lastName: "Щербатська",
    phone: "+380931460123",
    gender: "female",
}, {
    firstName: "Анонімний",
    lastName: "Анонімус",
    phone: "+380666666666",
}, {
    firstName: "Лілія",
    lastName: "Олдровна",
    phone: "+380504691254",
    gender: "female",
}, {
    firstName: "Маршен",
    lastName: "Еріксонян",
    phone: "+380739432123",
    gender: "male",
  }, {
    firstName: "Теодор",
    lastName: "Мотсбес",
    phone: "+380956319521",
    gender: "male",
  }];

function Contracts() {
    const [contracts, setContracts] = useState(data);
    const [search, setSearch] = useState('');
    const [showMale, setShowMale] = useState(true);
    const [showFemale, setShowFemale] = useState(true);
    const [showAnon, setShowAnon] = useState(true);

    function searchHandler(event) {
        const newSearch = event.target.value;
        setSearch(newSearch)
    }

    function filterByGender(item) {
        if ((!showMale && item.gender === 'male') ||
            (!showFemale && item.gender === 'female') ||
            (!showAnon && !item.gender)) {
            return false;
        }
        return true;
    }

    function filteredContracts() {
        return contracts.filter(item => {
            return (
                (item.firstName.toLowerCase().includes(search.toLowerCase()) ||
                item.lastName.toLowerCase().includes(search.toLowerCase()) ||
                item.phone.includes(search)) &&
                filterByGender(item)
            );
        });
    }

    return (
        <>
            <div className={styles.wrapper}>
                <input className={styles.search} placeholder='Search' value={search} onChange={searchHandler} />
                <div>
                    <label>
                        <input
                            type="checkbox"
                            checked={showMale}
                            onChange={() => setShowMale(!showMale)}
                        />
                        <span>Male</span>
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            checked={showFemale}
                            onChange={() => setShowFemale(!showFemale)}
                        />
                        Female
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            checked={showAnon}
                            onChange={() => setShowAnon(!showAnon)}
                        />
                        Anonymous
                    </label>
                </div>
                {filteredContracts().map((item, id) => {
                    return (
                        <Contract contact={item} key={id} />
                    );
                })}
            </div>
        </>
    );
}

export default Contracts;

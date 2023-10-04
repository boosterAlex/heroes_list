import { useState } from 'react';
import { useHttp } from '../../hooks/http.hook';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { heroesAdd } from '../../actions';

const HeroesAddForm = () => {
    const { request } = useHttp();
    const dispatch = useDispatch();

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [element, setElement] = useState('');

    const addHero = (e) => {
        e.preventDefault();
        const newHero = {
            id: uuidv4(),
            name: name,
            description: description,
            element: element,
        };

        request(
            'http://localhost:3001/heroes',
            'POST',
            JSON.stringify(newHero)
        ).then(dispatch(heroesAdd(newHero)));

        setName('');
        setDescription('');
        setElement('');
    };
    return (
        <form className='border p-4 shadow-lg rounded' onSubmit={addHero}>
            <div className='mb-3'>
                <label htmlFor='name' className='form-label fs-4'>
                    Имя нового героя
                </label>
                <input
                    onChange={(e) => setName(e.target.value)}
                    required
                    type='text'
                    name='name'
                    className='form-control'
                    id='name'
                    value={name}
                    placeholder='Как меня зовут?'
                />
            </div>

            <div className='mb-3'>
                <label htmlFor='text' className='form-label fs-4'>
                    Описание
                </label>
                <textarea
                    onChange={(e) => setDescription(e.target.value)}
                    value={description}
                    required
                    name='text'
                    className='form-control'
                    id='text'
                    placeholder='Что я умею?'
                    style={{ height: '130px' }}
                />
            </div>

            <div className='mb-3'>
                <label htmlFor='element' className='form-label'>
                    Выбрать элемент героя
                </label>
                <select
                    onChange={(e) => setElement(e.target.value)}
                    value={element}
                    required
                    className='form-select'
                    id='element'
                    name='element'
                >
                    <option>Я владею элементом...</option>
                    <option value='fire'>Огонь</option>
                    <option value='water'>Вода</option>
                    <option value='wind'>Ветер</option>
                    <option value='earth'>Земля</option>
                </select>
            </div>

            <button type='submit' className='btn btn-primary'>
                Создать
            </button>
        </form>
    );
};

export default HeroesAddForm;

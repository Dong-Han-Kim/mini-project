import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './App.css';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { search_list } from './assets/search-list';

interface SearchItem {
	id: number;
	content: string;
}

function App() {
	const [value, setValue] = useState('');
	const [result, setResult] = useState<SearchItem[]>([]);
	const [search, setSearch] = useState(false);
	const [autoComplete, setAutoComplete] = useState<string[]>([]);

	function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
		const inputValue = e.target.value;
		setValue(inputValue);
		setResult([]);
		setSearch(false);
		autoCompleteWord(inputValue);
	}

	function autoCompleteWord(inputValue: string) {
		if (!inputValue) return setAutoComplete([]);
		const autoCompleteFilter = search_list
			.filter((item: SearchItem) => item.content.toLowerCase().includes(inputValue))
			.map((item) => item.content);
		setAutoComplete(autoCompleteFilter);
	}
	console.log(autoComplete);

	function findValue() {
		const inputValue = value.toLowerCase();

		if (inputValue.length === 0) {
			setResult([]);
			setSearch(true);
			setAutoComplete([]);
		} else {
			const filterData = search_list.filter((item) => item.content.toLowerCase().includes(inputValue));
			setResult(filterData);
			setSearch(true);
			setAutoComplete([]);
		}
	}

	function findStrong(content: string, value: string) {
		if (!value) return null;
		const contentValue = content.toLowerCase();
		const strongValue = value.toLowerCase();
		const startValue = contentValue.indexOf(strongValue);
		const valueArray = Array.from(value);
		const endValue = startValue + valueArray.length;

		if (startValue === -1) return;

		const front = content.slice(0, startValue);
		const strongWord = content.slice(startValue, endValue);
		const back = content.slice(endValue);
		return (
			<>
				{front}
				<strong>{strongWord}</strong>
				{back}
			</>
		);
	}

	function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
		findValue();
	}

	return (
		<main>
			<section>
				<form onSubmit={handleSubmit}>
					<input type="text" placeholder="검색어를 입력하세요." value={value} onChange={handleInputChange} />
					<button onClick={findValue}>
						<FontAwesomeIcon icon={faSearch} />
					</button>
				</form>
				{autoComplete.length > 0 && (
					<div>
						<ul>
							{autoComplete.map((item, i) => {
								return <li key={i}>{findStrong(item, value)}</li>;
							})}
						</ul>
					</div>
				)}
			</section>

			<section>
				{result.length > 0 && (
					<ul>
						{result.map((item) => {
							return <li key={item.id}>{findStrong(item.content, value)}</li>;
						})}
					</ul>
				)}
				{search && result.length === 0 && '검색 결과가 없습니다. 검색어를 확인해주세요.'}
			</section>
		</main>
	);
}

export default App;

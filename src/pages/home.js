import Footer from "../components/footer";
import Header from "../components/header";
import HomeLeft from "../components/HomeLeft";
import HomeRight from "../components/HomeRight";
import { getAll } from "../api/products";

let param = null;
const HomePage = {
	async print() {
		const { data } = await getAll(param);
		return /*html*/ ` 
			<header id="header" class="grid grid-cols-8 gap-5 bg-[#f1f0f1] py-3 px-2 sticky top-0 z-50 border  border-gray-300 border-y-0">${Header.print()}</header>
			<div class="">${await HomeLeft.printf()}</div>
			<main class=" my-2 relative">
					
					<div class="main-right col-span-6">${await HomeRight.printf()}</div>
			</main>
			<ul class="text-center my-2 renderPage">
						
			</ul>
			<footer class="bg-[#272f54] text-center" id="footer">${Footer.printf()}</footer>
		`;
	},
	async afterRender() {
		Header.afterRender();

	}
};

export default HomePage;

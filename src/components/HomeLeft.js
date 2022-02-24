import { getAll } from '../api/category'
const HomeLeft = {
	async printf() {
		const { data } = await getAll();
		return /*html*/ `
            <div class="border border-red-300 bg-gray-100 mb-4 danhmuc">
					<ul class="main-menu px-4 flex">
					${data.map((cate) => {
			return /*html*/ `
							<ul class=""><li class="my-5 ml-[20px]"><a href="#" class=""> <a class="hover:text-orange-700" href="/productCate/${cate.id}">${cate.name}</a>
							</a></li></ul>
						`
		}).join("")}
					</ul>
				</div>
				
        `
	}
}

export default HomeLeft;
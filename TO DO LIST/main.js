window.addEventListener('load', () => {
	const form = document.querySelector("#new-task");
	const input = document.querySelector("#add-task");
	const list_el = document.querySelector("#to_do");

	form.addEventListener('submit', (e) => {
		e.preventDefault();

		const task = input.value;

		if(!task){
			alert("Task can't be empty!");
			return;
		}

		const task_el = document.createElement('div');
		task_el.classList.add('task');

		const task_content_el = document.createElement('div');
		task_content_el.classList.add('content');

		task_el.appendChild(task_content_el);

		const task_input_el = document.createElement('input');
		task_input_el.classList.add('text');
		task_input_el.type = 'text';
		task_input_el.value = task;
		task_input_el.setAttribute('readonly', 'readonly');

		task_content_el.appendChild(task_input_el);

		const task_actions_el = document.createElement('div');
		task_actions_el.classList.add('actions');
		
		const task_modify_el = document.createElement('button');
		task_modify_el.classList.add('edit');
		task_modify_el.innerText = "Modify";

		const task_delete_el = document.createElement('button');
		task_delete_el.classList.add('delete');
		task_delete_el.innerText = 'Done';

		task_actions_el.appendChild(task_modify_el);
		task_actions_el.appendChild(task_delete_el);

		task_el.appendChild(task_actions_el);

		list_el.appendChild(task_el);

		input.value = '';

		task_modify_el.addEventListener('click', (e) => {
			if (task_modify_el.innerText.toLowerCase() == "modify") {
				task_input_el.removeAttribute("readonly");
				task_input_el.focus();
				task_modify_el.innerText = "Save";
			} else {
				task_modify_el.innerText = "Modify";
				task_input_el.setAttribute("readonly", "readonly");
			}
		});

		task_delete_el.addEventListener('click', (e) => {
			list_el.removeChild(task_el);
		});
	});
});
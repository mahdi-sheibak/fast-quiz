export const errorMessages = {
	INTERNAL_SERVER: "خطا در ارتباط با سرور. لطفا دوباره تلاش کنید.",
	INVALID_CREDENTIALS: "متاسفانه، کاربری با اطلاعات وارد شده یافت نشد.",
	UNKNOWN_ERROR: "متاسفانه خطایی رخ داده است",
};

export const messages = {
	validation: {
		email: {
			required: "این فیلد ضروری است",
			wrong: "ایمیل وارد شده اشتباه هست",
		},
		password: {
			required: "این فیلد ضروری است",
		},
		required: "این فیلد ضروری است",
	},
	actions: { dismiss: "انصراف", open: "باز کردن" },
	home: {
		title: "پویشگر",
		desc: "جایی برای آزمودن دانسته های خود",
		master: {
			title: "ورود استاد",
		},
		student: {
			title: "ورود دانشجو",
		},
	},
	register: {
		master: {
			validation: {
				fullName: {
					require: "نام و نام خانوادگی اجباری است",
				},
				university: {
					require: "نام دانشگاه اجباری است",
				},
				email: {
					require: "ایمیل اجباری است",
				},
				password: {
					require: "رمز عبور اجباری است",
				},
			},
			fullName: {
				label: "نام و نام خانوادگی",
			},
			university: {
				label: "نام دانشگاه",
			},
			email: {
				label: "ایمیل",
			},
			password: {
				label: "رمز عبور",
			},
			submit: {
				text: "ثبت نام",
			},
		},
	},
};

export const universities = [
	{ label: "دانشگاه چمران گرگان", value: "1" },
	{ label: "دانشگاه شمسی پور تهران", value: "2" },
	{ label: "دانشگاه صنعتی شریف", value: "3" },
	{ label: "دانشگاه علم و صنعت ایران", value: "4" },
	{ label: "دانشگاه امیرکبیر", value: "5" },
	{ label: "دانشگاه تربیت مدرس", value: "6" },
	{ label: "دانشگاه شهید بهشتی", value: "7" },
	{ label: "دانشگاه علامه طباطبایی", value: "8" },
	{ label: "دانشگاه خوارزمی", value: "9" },
	{ label: "دانشگاه صنعتی خواجه نصیر الدین طوسی", value: "10" },
];

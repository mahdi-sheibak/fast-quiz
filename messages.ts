export const errorMessages = {
	INTERNAL_SERVER: "خطا در ارتباط با سرور. لطفا دوباره تلاش کنید.",
	INVALID_CREDENTIALS: "متاسفانه، کاربری با اطلاعات وارد شده یافت نشد.",
	UNKNOWN_ERROR: "متاسفانه خطایی رخ داده است",
}

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
					min: "نام و نام خانوادگی اجباری است",
				},
				university: {
					min: "نام دانشگاه اجباری است",
				},
				email: {
					min: "ایمیل اجباری است",
				},
				password: {
					min: "رمز عبور اجباری است",
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
}

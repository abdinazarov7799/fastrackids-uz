import React from 'react';
import { useForm } from 'react-hook-form';
import { FaArrowAltCircleRight } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const TestChildForm = () => {
    const { t } = useTranslation();
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        console.log(data);
    };

    return (
        <form className='mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 text-[18px] font-medium' onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label className='block mb-2'>
                    {t("Bolaning ismi")} <span className='text-red-600'>*</span>
                </label>
                <input
                    type='text'
                    className='w-full px-4 py-2 border rounded outline-none'
                    placeholder={t("Ism")}
                    {...register('childName', { required: true })}
                />
                {errors.childName && <p className='text-red-600'>{t("Bolaning ismi majburiy")}</p>}
            </div>
            <div>
                <label className='block mb-2'>
                    {t("Bola yoshi")} <span className='text-red-600'>*</span>
                </label>
                <input
                    type='text'
                    className='w-full px-4 py-2 border rounded outline-none'
                    placeholder={t("Yosh")}
                    {...register('childAge', { required: true })}
                />
                {errors.childAge && <p className='text-red-600'>{t("Bola yoshi majburiy")}</p>}
            </div>
            <div>
                <label className='block mb-2'>
                    {t("Ota-ona ismi")} <span className='text-red-600'>*</span>
                </label>
                <input
                    type='text'
                    className='w-full px-4 py-2 border rounded outline-none'
                    placeholder={t("Ota-ona ismi")}
                    {...register('parentName', { required: true })}
                />
                {errors.parentName && <p className='text-red-600'>{t("Ota-ona ismi majburiy")}</p>}
            </div>
            <div>
                <label className='block mb-2'>
                    {t("Telefon")} <span className='text-red-600'>*</span>
                </label>
                <input
                    type='tel'
                    className='w-full px-4 py-2 border rounded outline-none'
                    placeholder={t("+998 XXX XX XX")}
                    {...register('phone', { required: true })}
                />
                {errors.phone && <p className='text-red-600'>{t("Telefon raqami majburiy")}</p>}
            </div>
            <div>
                <label className='block mb-2'>
                    {t("Elektron pochta")} <span className='text-red-600'>*</span>
                </label>
                <input
                    type='email'
                    className='w-full px-4 py-2 border rounded outline-none'
                    placeholder={t("your-email@gmail.com")}
                    {...register('email', { required: true })}
                />
                {errors.email && <p className='text-red-600'>{t("Elektron pochta majburiy")}</p>}
            </div>
            <div>
                <label className='block mb-2'>
                    {t("FTK Akademiyasini tanlang")} <span className='text-red-600'>*</span>
                </label>
                <select
                    className='w-full px-4 py-2 border rounded outline-none'
                    {...register('academy', { required: true })}
                >
                    <option value=''>{t("--")}</option>
                    <option value='tashkent-yunusobod'>{t("Toshkent Yunusobod")}</option>
                </select>
                {errors.academy && <p className='text-red-600'>{t("FTK Akademiyasini tanlash majburiy")}</p>}
            </div>
            <div className='col-span-2'>
                <label className='block mb-2'>
                    {t("Xabar")}
                </label>
                <textarea
                    className='w-full px-4 py-2 border rounded outline-none'
                    rows='4'
                    {...register('message')}
                ></textarea>
            </div>
            <div className='col-span-2'>
                <label className='block mb-2'>
                    {t("GDPR")}
                    <span className='text-red-600'>*</span>
                </label>
                <div className='flex items-center'>
                    <input
                        type='checkbox'
                        className='mr-2'
                        {...register('gdpr', { required: true })}
                    />
                    <p className='text-[15px] font-normal'>{t("Men Maxfiylik siyosatini o'qib chiqdim, tushundim va qabul qildim.")}</p>
                </div>
                {errors.gdpr && <p className='text-red-600'>{t("GDPR qabul qilish majburiy")}</p>}
            </div>
            <div className='col-span-2'>
                <button
                    type='submit'
                    className='w-full py-4 bg-purple text-white rounded outline-none flex items-center justify-center'
                >
                    <FaArrowAltCircleRight/>
                    <span className='ml-2'>{t("yuborish")}</span>
                </button>
            </div>
        </form>
    );
};

export default TestChildForm;

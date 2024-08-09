import React from 'react';
import { useForm } from 'react-hook-form';
import { FaArrowAltCircleRight } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const ContactForm = () => {
    const { t } = useTranslation();
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        console.log(data);
    };

    return (
        <div>
            <p className='text-lg mb-4'>{t("Quyidagi shaklni to'ldiring va biz imkon qadar tezroq siz bilan bog'lanamiz:")}</p>
            <form className='grid grid-cols-1 md:grid-cols-2 gap-4 text-[16px] font-medium' onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <input
                        type='text'
                        className='w-full px-4 py-2 border rounded outline-none'
                        placeholder={t("Ota-onaning to'liq ismi")}
                        {...register('parentFullName', { required: true })}
                    />
                    {errors.parentFullName && <p className='text-red-600'>{t("Ota-onaning to'liq ismi majburiy")}</p>}
                </div>
                <div>
                    <input
                        type='text'
                        className='w-full px-4 py-2 border rounded outline-none'
                        placeholder={t("Bolaning ismi")}
                        {...register('childName', { required: true })}
                    />
                    {errors.childName && <p className='text-red-600'>{t("Bolaning ismi majburiy")}</p>}
                </div>
                <div>
                    <input
                        type='tel'
                        className='w-full px-4 py-2 border rounded outline-none'
                        placeholder={t("Telefon")}
                        {...register('phone', { required: true })}
                    />
                    {errors.phone && <p className='text-red-600'>{t("Telefon raqami majburiy")}</p>}
                </div>
                <div>
                    <input
                        type='email'
                        className='w-full px-4 py-2 border rounded outline-none'
                        placeholder={t("Elektron pochta")}
                        {...register('email', { required: true })}
                    />
                    {errors.email && <p className='text-red-600'>{t("Elektron pochta majburiy")}</p>}
                </div>
                <div>
                    <select
                        className='w-full px-4 py-2 border rounded outline-none'
                        {...register('branch', { required: true })}
                    >
                        <option value=''>{t("--")}</option>
                        <option value='tashkent-yunusobod'>{t("Toshkent Yunusobod")}</option>
                    </select>
                    {errors.branch && <p className='text-red-600'>{t("FTK Akademiyasini tanlash majburiy")}</p>}
                </div>
                <div>
                    <select
                        className='w-full px-4 py-2 border rounded outline-none'
                        {...register('course', { required: true })}
                    >
                        <option value=''>{t("--")}</option>
                        <option value='fastrack-kop-kunlik'>{t("FasTrack ko'p kunlik")}</option>
                    </select>
                    {errors.course && <p className='text-red-600'>{t("Kursni tanlash majburiy")}</p>}
                </div>
                <div className='col-span-2'>
                    <textarea
                        className='w-full px-4 py-2 border rounded outline-none'
                        placeholder={t("Xabar")}
                        rows='4'
                        {...register('message')}
                    ></textarea>
                </div>
                <div className='col-span-2 flex items-start'>
                    <input
                        type='checkbox'
                        className='mr-2 mt-1'
                        {...register('gdpr', { required: true })}
                    />
                    <p className='text-[15px] font-normal'>{t("Men Maxfiylik siyosatini o'qib chiqdim, tushundim va qabul qildim.")}</p>
                </div>
                {errors.gdpr && <p className='col-span-2 text-red-600'>{t("GDPR qabul qilish majburiy")}</p>}
                <div className='col-span-2'>
                    <button
                        type='submit'
                        className='w-full py-4 px-7 bg-purple hover:bg-orange transition text-white rounded outline-none flex items-center justify-between'
                    >
                        <span className='ml-2'>{t("yuborish")}</span>
                        <FaArrowAltCircleRight/>
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ContactForm;

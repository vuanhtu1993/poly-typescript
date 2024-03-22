import Button from "./Button";
import Select from "./Select";

const Banner = () => {
    return <>
        <section className="relative bg-[url('/banner.png')] bg-cover bg-center bg-no-repeat">
            <div className="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l" />
            <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:items-center lg:px-8">
                <div className="w-full text-center">
                    <h2 className="text-white text-2xl">Vexere - Cam kết hoàn 150% nếu nhà xe không giữ chỗ</h2>
                    <form action="" className="bg-white p-4 flex gap-4">
                        <Select title="Điểm đi" />
                        <Select title="Điểm đến" />
                        <Select title="Ngày đi" />
                        <Button title="Tìm kiếm" />
                    </form>
                </div>
            </div>
        </section>
    </>
}

export default Banner;
import SearchBar from '../../../../components/Search-bar'

import bannerImg from '../../img/banner.svg'
import userIconImg from '../../img/usericon.svg'
import RepoBox from '../repo-box/Repo-box'

export default function Center() {
    const repoObj = [
        {
            logo: userIconImg,
            username: '21divcert',
            watch: 556,
            title: 'alpaca-lora',
            content: 'Instruct-tune LLaMA on consumer hardware, and OLLAMA software developement. Inference code for Llama models and A Gradio web UI for Large Language Models. Supports transformers',
            tag: ['AI', 'FINE-TUNE', 'LLAMA', 'HARDWARE'],
            language: 'Dart',
            update: 'last week'
        },
        {
            logo: userIconImg,
            username: 'ambition-kwon',
            watch: 556,
            title: 'opensource-class',
            content: 'Instruct-tune LLaMA on consumer hardware, and OLLAMA software developement. Inference code for Llama models and A Gradio web UI for Large Language Models. Supports transformers',
            tag: ['AI', 'FINE-TUNE', 'LLAMA', 'HARDWARE'],
            language: 'Python',
            update: 'last week'
        },
        {
            logo: userIconImg,
            username: '21divcert',
            watch: 556,
            title: 'alpaca-lora',
            content: 'Instruct-tune LLaMA on consumer hardware, and OLLAMA software developement. Inference code for Llama models and A Gradio web UI for Large Language Models. Supports transformers',
            tag: ['AI', 'FINE-TUNE', 'LLAMA', 'HARDWARE'],
            language: 'Dart',
            update: 'last week'
        },
        {
            logo: userIconImg,
            username: 'ambition-kwon',
            watch: 556,
            title: 'opensource-class',
            content: 'Instruct-tune LLaMA on consumer hardware, and OLLAMA software developement. Inference code for Llama models and A Gradio web UI for Large Language Models. Supports transformers',
            tag: ['AI', 'FINE-TUNE', 'LLAMA', 'HARDWARE'],
            language: 'Python',
            update: 'last week'
        },
    ]

    return (
        <section className="flex-1 flex-col bg-[#0E1116]">
            <article className="flex justify-center py-8">
                <SearchBar />
            </article>
            <article className="flex justify-center">
                <img src={bannerImg} alt="" />
            </article>
            <article className="px-7 py-7">
                <div className="flex flex-col pb-5">
                    <div className="text-xl font-semibold text-white">
                        My
                        <br />
                        Partners
                    </div>
                    <div className="flex justify-around last:mr-0">
                        {repoObj.map((value, index) => (
                            <RepoBox
                                key={index}
                                logo={value.logo}
                                username={value.username}
                                watch={value.watch}
                                title={value.title}
                                content={value.content}
                                tag={value.tag}
                                language={value.language}
                                update={value.update}
                            />
                        ))}
                    </div>
                </div>
                <div className="flex flex-col pb-5">
                    <div className="text-xl font-semibold text-white">
                        Most
                        <br />
                        Viewed
                    </div>
                    <div className="flex justify-around">
                        {repoObj.map((value, index) => (
                            <RepoBox
                                key={index}
                                logo={value.logo}
                                username={value.username}
                                watch={value.watch}
                                title={value.title}
                                content={value.content}
                                tag={value.tag}
                                language={value.language}
                                update={value.update}
                            />
                        ))}
                    </div>
                </div>
                <div className="flex flex-col pb-5">
                    <div className="text-xl font-semibold text-white">
                        Recently Commit
                        <br />
                        Repositories
                    </div>
                    <div className="flex justify-around">
                        {repoObj.map((value, index) => (
                            <RepoBox
                                key={index}
                                logo={value.logo}
                                username={value.username}
                                watch={value.watch}
                                title={value.title}
                                content={value.content}
                                tag={value.tag}
                                language={value.language}
                                update={value.update}
                            />
                        ))}
                    </div>
                </div>
            </article>
        </section>
    )
}
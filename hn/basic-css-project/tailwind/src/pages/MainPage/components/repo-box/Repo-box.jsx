import watchImg from '../../img/watch.svg'
import langColorImg from '../../img/Rectangle.svg'

export default function RepoBox({logo, username, watch, title, content, tag, language, update}) {
    return (
        <div className="flex flex-col bg-[#161B22] rounded-xl p-1.5 mr-5">
            <header className="flex justify-between">
                <div className="flex">
                    <img src={logo} alt="" />
                    <p className="text-[#58A6FF] text-xs text-nowrap">{username}</p>
                </div>
                <div className="flex">
                    <img src={watchImg} alt="" />
                    <p className="text-[#848D96] text-[0.7rem]">{watch}</p>
                </div>
            </header>
            <main className="flex flex-col items-center">
                <div className="text-[#58A6FF] text-xl font-semibold">{title}</div>
                <div className="text-[#8B949E] text-[0.65rem]">{content}</div>
                <div>{tag}</div>
            </main>
            <footer className="flex justify-around text-[#8B949E] text-[0.65rem]">
                <div className="flex">
                    <img src={langColorImg} alt="" />
                    <p>{language}</p>
                </div>
                <div>GPL-3.0 license</div>
                <div>Updated {update}</div>
            </footer>
        </div>
    )
}

/*
{
    logo: userIconImg,
    name: 'ambition-kwon',
    watch: 556,
    title: 'opensource-class',
    content: 'Instruct-tune LLaMA on consumer hardware, and OLLAMA software developement.\n' +
        'Inference code for Llama models and A Gradio web UI for Large Language Models. Supports transformers',
    tag: ['AI', 'FINE-TUNE', 'LLAMA', 'HARDWARE'],
    language: 'Python',
    update: 'last week'
},
 */
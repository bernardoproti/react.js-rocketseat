import styles from './Post.module.css'

export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src="https://github.com/bernardoproti.png"/>
                    <div className={styles.authorInfo}>
                        <strong>Bernardo Proti</strong>
                        <span>Web Developer</span>
                    </div>
                </div>
                <time title="14 de Abril às 16:15h" dateTime="2025-14-04 16:15:00">Publicado há 1h</time>
            </header>
            <div className={styles.content}>
                <p>Fala galeraa 👋</p>
                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
                <p>👉{' '}<a href="#">jane.design/doctorcare</a></p>
                <p>
                    <a href="#">
                        #novoprojeto
                    </a>{' '} 
                    <a href="#">
                        #nlw
                    </a>{' '} 
                    <a href="#">
                        #rocketseat
                    </a>
                </p>
            </div>
        </article>
    );
}
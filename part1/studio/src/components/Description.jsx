import styles from './Description.module.css';
import React from 'react';

function RecipeAuthor() {
    let authorLink = "https://tastesbetterfromscratch.com/pulled-pork/";
    let authorPhoto = "https://tastesbetterfromscratch.com/wp-content/uploads/2023/06/about-me.jpg";
    let authorName = "Lauren Allen";

    return (
    <div className = {styles.recipeAuthorBlock}>
        <img src={authorPhoto} alt="This is a picture of food" className={styles.imageUpdates} />
        <div>
            <h3>{authorName}</h3>
            <a href={authorLink}>Blog Name</a>
        </div>
    </div>
    );
};

class RecipeDescription extends React.Component {
    render() {
        return(
            <div>
                <div>
                    <h1>Pulled Pork Recipe</h1>
                    <p>Easy BBQ Pulled Pork at Home</p>
                </div>
                <RecipeAuthor />
            </div>
        )
    }
}

export default RecipeDescription;
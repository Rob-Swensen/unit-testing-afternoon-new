import { shortenText } from "../utils/functions";
import { wordCount, attachUserName } from "../../server/utils";
import { shortText, longText, posts, users } from "./_data_/testData";

test("shortenText should not alter a string less than 100 characters", () => {
  expect(shortenText(shortText)).toHaveLength(29);
});

test("shortenText should cut a string over 100 characters and add 3 periods to end", () => {
  const shortened = shortenText(longText);
  expect(shortened).not.toHaveLength(longText.length);
  expect(shortened.slice(-3)).toBe("...");
});

test("wordCount will return a total number of words in an array", () => {
  expect(wordCount(posts)).toBe(233);
});

test("attachUserName will see if the first post returned has a property displayName", () => {
  const newPosts = attachUserName(users, posts);
  expect(newPosts[0]).toHaveProperty("displayName");
});

test('attachUserName will remove any post with no matching user', () => {
    const newPosts = attachUserName(users, posts);
    const deletedPost = posts[5];
    expect(newPosts).not.toContainEqual(deletedPost)
})

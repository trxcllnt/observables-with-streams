/**
 * Copyright 2018 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *     http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import { fromIterable, takeWhile, collect } from "../ows.js";

Mocha.describe("take()", function() {
  Mocha.it("takes the n first items", async function() {
    const list = await collect(
      fromIterable([1, 2, 1, 3, 1, 1]).pipeThrough(takeWhile(i => i < 3))
    );

    chai.expect(list).to.deep.equal([1, 2, 1]);
  });
});
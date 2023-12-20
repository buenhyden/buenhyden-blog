---
date: <% tp.file.creation_date() %>
tags:
    - 📔메모/🌰씨앗/📚독서
    - "%%변경해주세요!"
    - "%%"
author:
title: <% tp.file.title %>
category:
start_read_date:
finish_read_date:
total_page:
status:
my_rate:
book_note:
---

# <% tp.file.title %>

[[독서]] %%변경해주세요! %%
<% await tp.file.move("/Inbox/" + tp.file.title) %> %%변경해주세요! %%
<% tp.file.cursor(0) %>

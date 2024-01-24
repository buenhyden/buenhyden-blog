---
<%*  
  let title = tp.file.title
  if (title.startsWith("Untitled") || title.startsWith("New Document")) {
    title = await tp.system.prompt("Title");
    await tp.file.rename(`${title}`);
  }
%>
description: ""
summary: ""
title: <%`${title}`%>
linkTitle: <%`${title}`%>
series: 
categories: 
tags: 
authors:
  - Hyunyoun Jo
lastmod: <% moment(tp.file.last_modified_date()).format("YYYY-MM-DD HH:mm:ss") %>
date: <% moment(tp.file.creation_date()).format("YYYY-MM-DD HH:mm:ss") %>
draft: false
featured: true
---

## What is ?

{{< typeit tag=h2 lifeLike=true >}}
<%`${title}`%>
{{< /typeit >}}

## Reference
